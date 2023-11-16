import axios from "axios";
import { ChangeEvent, useState } from "react";
import { accountFetcher } from "src/api/account/fetcher";
import CheckIcon from "src/assets/icons/CheckIcon";
import XIcon from "src/assets/icons/XIcon";
import FileSelectorImg from "src/assets/images/FileSelector.png";
import { usePostInquiry } from "src/hooks/account/usePostInquiry";
import * as Styled from "./index.style";

const InquiryList = {
  DIAGNOSE: "증상감별",
  HOSPITAL: "병원찾기",
  CHALLENGE: "건강챌린지",
  REWARDS: "리워드",
  USER: "로그인/회원정보",
  OTHERS: "기타",
};

const Inquiry = () => {
  const [inquiryCategory, setInquiryCategory] = useState({
    state: false,
    category: InquiryList.DIAGNOSE,
  });
  const [fileList, setFileList] = useState<any[]>([]);
  const [inquiryContent, setInquiryContent] = useState({
    title: "",
    content: "",
  });

  const { postInquiry } = usePostInquiry();
  const placeholdervalue =
    "문의 내용을 입력해주세요.\n\n궁금한 점이 있다면 무엇이든 자유롭게 문의해 주세요.\n휴일을 제외한 평일에는 하루 이내에 답변 드립니다.";
  const handleClickCategory = () => {
    setInquiryCategory((prev) => {
      return { ...prev, state: true };
    });
  };

  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = e.target.files;
      const fileArr = Array.from(files);

      setFileList([...fileList, ...fileArr]);
    }
  };

  const handleDeleteFile = (indexToDelete: number) => {
    setFileList(fileList.filter((_, index) => index !== indexToDelete));
  };

  const handleButtonClick = async () => {
    const getKeyByValue = <T extends object>(object: T, value: T[keyof T]): keyof T | undefined => {
      return Object.keys(object).find((key) => object[key as keyof T] === value) as keyof T | undefined;
    };

    const categoryKey = getKeyByValue(InquiryList, inquiryCategory.category);

    if (!categoryKey) {
      return; // Exit the function if the category key is not found.
    }

    try {
      const uploadPromises = fileList.map(async (file) => {
        try {
          const imgRoute = await accountFetcher.getImageRoute();

          const response = await axios.put(imgRoute.url, file, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          // replace the file with the url
          return imgRoute.url.split("?")[0];
        } catch (err) {
          console.error(err);
          // Depending on how you want to handle individual file errors,
          // you could return null or throw an error

          return null;
        }
      });

      const uploadedFilesData = await Promise.all(uploadPromises);

      // console.log(uploadedFilesData);

      postInquiry({
        category: categoryKey,
        title: inquiryContent.title,
        content: inquiryContent.content,
        images: uploadedFilesData,
      });
    } catch (error) {
      console.error(error);
      // Handle the general error accordingly.
    }
  };

  const handlechangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setInquiryContent((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const handlechangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInquiryContent((prev) => {
      return { ...prev, content: e.target.value };
    });
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.CategoryButton>
          <div>{inquiryCategory.category}</div>
          <button onClick={handleClickCategory}>선택</button>
        </Styled.CategoryButton>
        <Styled.LineDivider />
        <Styled.Content>
          제목
          <input
            className="contentTitle"
            type="text"
            placeholder={"제목을 입력해주세요"}
            value={inquiryContent.title}
            onChange={handlechangeTitle}
          />
          <textarea className="contentValue" placeholder={placeholdervalue} value={inquiryContent.content} onChange={handlechangeContent} />
          <Styled.InquiryPicture>
            <div className="title">문의 사진은 최대 3장까지 올릴 수 있어요</div>
            <div className="pictureDiv">
              <>
                <input type="file" multiple={true} id="fileSelector" onChange={handleChangeImg} />
                <label className="fileSelector" htmlFor="fileSelector">
                  <img src={FileSelectorImg} alt="fileSelector" className="fileSelectorIcon" />
                </label>
                {fileList.length > 0 && (
                  <div className="filePreviewContainer">
                    {fileList.map((file, index) => (
                      <div key={index} className="filePreview">
                        <img className="fileImg" src={URL.createObjectURL(file)} alt={`file-preview-${index}`} />
                        <button className="deleteButton" onClick={() => handleDeleteFile(index)}>
                          <XIcon width={10} height={10} strokeWidth={3} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            </div>
          </Styled.InquiryPicture>
          {fileList.length > 3 && (
            <Styled.Notifier>
              파일은 <span className="blue">최대 3개</span>까지 첨부할 수 있어요.
              <br />
              첨부된 파일을 삭제하고 다시 시도해주세요.
            </Styled.Notifier>
          )}
          <Styled.Button
            disabled={inquiryContent.title === "" || inquiryContent.content === "" || fileList.length > 3}
            onClick={handleButtonClick}
          >
            문의 등록하기
          </Styled.Button>
        </Styled.Content>
      </Styled.Wrapper>
      {inquiryCategory.state && (
        <Styled.InquiryCategoryModal>
          <div className="modalTitle">문의 카테고리를 선택해주세요</div>
          <ul className="categoryList">
            {Object.entries(InquiryList).map(([key, value]) => (
              <li
                key={key}
                className={`categoryItem ${inquiryCategory.category === value ? "selected" : ""}`}
                onClick={() => setInquiryCategory({ state: false, category: value })}
              >
                {value}
                {inquiryCategory.category === value && <CheckIcon />}
              </li>
            ))}
          </ul>
        </Styled.InquiryCategoryModal>
      )}
    </>
  );
};

export default Inquiry;

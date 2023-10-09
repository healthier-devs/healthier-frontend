import { useEffect, useRef, useState } from "react";

function useModal(defaultOpen = false) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(defaultOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      const current = modalRef.current;

      if (isOpenModal && current && !current.contains(e.target as Node)) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpenModal]);

  const toggleOpenModal = () => {
    setIsOpenModal((prevIsOpenModal) => !prevIsOpenModal);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, modalRef, toggleOpenModal, closeModal, openModal };
}

export default useModal;

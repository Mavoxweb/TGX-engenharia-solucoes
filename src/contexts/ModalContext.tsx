import { createContext, useContext, useState, type ReactNode } from 'react';

type ModalContextType = {
  isOpen: boolean;
  openModal: (defaultMessage?: string, defaultService?: string) => void;
  closeModal: () => void;
  defaultMessage: string;
  defaultService: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState('');
  const [defaultService, setDefaultService] = useState('');

  const openModal = (message = '', service = '') => {
    setDefaultMessage(message);
    setDefaultService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, defaultMessage, defaultService }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

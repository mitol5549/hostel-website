import React, { FC, SetStateAction } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Form, Input } from '@heroui/react';

interface ModalBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalBooking: FC<ModalBookingProps> = ({ isOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <div id="WidgetVerticalBlockId"></div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

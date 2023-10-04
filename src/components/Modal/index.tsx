interface ModalProps {
  children: JSX.Element;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="bg-zinc-900 bg-opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">{children}</div>
    </div>
  );
}

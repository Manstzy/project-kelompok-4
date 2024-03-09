import { IoClose } from 'react-icons/io5';
import LoginForm from '../molecules/LoginForm';

function LoginModal(props) {
  const { setIsModalShow } = props;

  document.body.style.overflow = 'hidden';
  return (
    <div>
      <div className="fixed h-full w-screen p-8 top-0 bg-black/50 z-20 flex justify-center items-center overflow-y-auto">
        <button className="absolute top-0 right-0" onClick={setIsModalShow}>
          <IoClose className="text-white opacity-50 hover:opacity-100 text-4xl" />
        </button>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginModal;

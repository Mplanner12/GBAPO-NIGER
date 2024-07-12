import { Button } from './button';

interface TmodelToggler {
  modelToggler: () => void;
}

const ModelToggler = ({ modelToggler }: TmodelToggler) => {
  return (
    <div>
      {' '}
      <Button
        onClick={modelToggler}
        className="bg-basecolor text-black hover:bg-basecolor flex items-center justify-end space-x-2 rounded-md"
      >
        <img src="/UserIcon.png" alt="" />
        <p>Add User</p>
      </Button>
    </div>
  );
};

export default ModelToggler;

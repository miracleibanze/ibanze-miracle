import Button from './design/Button';
import Loader from './skeletons/Loader';

const DeleteModal = ({ title, action, onConfirm, onCancel, name, loading }) => {
  return (
    <div className="flex items-center justify-center fixed inset-0 z-[2000]">
      <div className="fixed inset-0 bg-black/50 pointer-events-none" />
      <div className="bg-white p-6 rounded-md shadow-md z-[10000] max-w-sm w-full">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <p className="text-sm mb-6">
          {action === 'delete' &&
            `Are you sure you want to delete your ${name}? This action cannot be
          undone.`}
          {action === 'logout' && `Are you sure you want to logout.`}
        </p>
        <div className="flex justify-end gap-4">
          <Button onClick={onCancel} light hFull>
            Cancel
          </Button>
          <Button blue onClick={onConfirm} className="capitalize">
            {loading ? action + '..' : action}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

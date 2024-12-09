import { useState } from 'react';
import { chatDotsSvg, userSvg } from '../../assets';
import Button from './Button';
import axiosInstance from '../../features/utils/axiosInstance';
import Notice from './Notice';

const PersonCard = ({ person, className, friends, userId, requests }) => {
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [isFriend, setIsFriend] = useState(friends);
  const [confirmed, setConfirmed] = useState(false);
  const [notice, setNotice] = useState('');
  const [declined, setDeclined] = useState(false);

  const sendFriendRequest = async () => {
    try {
      console.log('send a request');
      // Send API call to send friend request
      const response = await axiosInstance.post(
        `/users/send-friend-request/${person._id}`,
        {
          senderId: userId,
        }
      );

      setIsRequestSent(true);
    } catch (error) {
      setNotice('Failed to send friend request.');
      console.log(error);
      alert('An error occurred while sending the request.');
    }
  };

  const acceptRequest = async () => {
    try {
      const response = await axiosInstance.post(
        `/users/respond-friend-request/${person._id}`,
        {
          recipientId: userId,
          action: 'accept',
        }
      );

      if (response.status === 200) {
        setConfirmed(true);
        setNotice('Friend request accepted!');
      } else {
        setNotice('Failed to accept friend request.');
      }
    } catch (error) {
      console.error('Error accepting friend request:', error);
      alert('An error occurred while accepting the request.');
    }
  };

  const declineRequest = async () => {
    try {
      const response = await axiosInstance.post(
        `/users/respond-friend-request/${person._id}`,
        {
          recipientId: userId,
          action: 'decline',
        }
      );

      if (response.status === 200) {
        setDeclined(true);
        setNotice('Friend request declined.');
      } else {
        setNotice('Failed to decline friend request.');
      }
    } catch (error) {
      setNotice('request already made');
    }
  };

  const toggleRequest = () => {
    setIsRequestSent(false);
    setNotice('Your friend request is being withdrawn.');
  };

  return (
    <div
      className={`px-6 py-2 w-full flex-between-hor gap-5 ${className && className}`}
    >
      <Notice message={notice} onClose={() => setNotice('')} />
      <img
        src={person.image ? person.image : userSvg}
        className="w-[3rem] h-[3rem] rounded-full border border-zinc-50 object-top object-cover"
      />
      <div className="w-full flex-between-hor gap-2">
        <a
          href={`/dash/people/person/${person.username}`}
          className="w-full flex-col cursor-pointer group"
        >
          <p className="body-1 font-semibold leading-none group-hover:underline">
            {person.names}
          </p>
          <p className="body-1 font-normal">{person.username}</p>
        </a>
        {requests && !declined && (
          <Button border rounded light onClick={declineRequest}>
            Decline
          </Button>
        )}
        <Button
          blue={!requests ? !isFriend && !isRequestSent : false}
          border={!requests ? isRequestSent || isFriend : true}
          rounded={!requests ? isRequestSent || isFriend : true}
          light={!requests ? isRequestSent || isFriend : true}
          onClick={
            !requests
              ? isRequestSent
                ? isFriend
                  ? null
                  : toggleRequest
                : sendFriendRequest
              : acceptRequest
          }
          href={isFriend ? `/dash/message/to/${person._id}` : null}
          className={isFriend && 'p-1'}
        >
          {!requests ? (
            <>
              {isRequestSent ? (
                isFriend ? (
                  <img src={chatDotsSvg} className="w-6 h-6 hover:h-8" />
                ) : (
                  'Request Sent'
                )
              ) : isFriend ? (
                <img src={chatDotsSvg} className="w-7 h-7" />
              ) : (
                'Add Friend'
              )}
            </>
          ) : (
            <>{confirmed ? 'message' : 'confirm'}</>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PersonCard;

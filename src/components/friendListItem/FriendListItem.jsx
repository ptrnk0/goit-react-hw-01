import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx('frient-item-status', isOnline && 'is-online')}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

export default FriendListItem;

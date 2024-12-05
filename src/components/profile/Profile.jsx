import css from './Profile.module.css';

const Profile = ({ userName, tag, location, image, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.profileInfo}>
                <div className={css.profileImgThumb}>
                    <img src={image} alt="User avatar" />
                </div>
                <p className={css.profileName}>{userName}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>
            </div>

            <ul className={css.profileStatsList}>
                <li className={css.profileListItem}>
                    <span>Followers</span>
                    <span className={css.profileListItemStat}>
                        {stats.followers}
                    </span>
                </li>
                <li className={css.profileListItem}>
                    <span>Views</span>
                    <span className={css.profileListItemStat}>
                        {stats.views}
                    </span>
                </li>
                <li className={css.profileListItem}>
                    <span>Likes</span>
                    <span className={css.profileListItemStat}>
                        {stats.likes}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;

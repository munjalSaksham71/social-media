import Card from '../Card/Card'
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <Card>
            <div className="flex-row align-card">
                <img className="avatar avatar_img" src="./images/img_avatar.png" alt="image-avatar" />
                <div className="flex-column profile_info">
                    <div className="profile_name">Saksham</div>
                    <div className="profile_username">@Sakshammunjal</div>
                </div>
            </div>
        </Card>
    )
}

export default ProfileCard

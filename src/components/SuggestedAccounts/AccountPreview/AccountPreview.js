import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    alt="Miu Shiromine"
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f11fb9d413ba94a348893ab4b35de60c~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1690509600&x-signature=GbBGXA0fFZlGJZ5NFbKQsS6FKP8%3D"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>miu_shiromine</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Miu Shiromine</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>6.9M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>6.9M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

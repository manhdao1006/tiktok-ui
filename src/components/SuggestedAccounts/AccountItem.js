import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[700, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        alt="Miu Shiromine"
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f11fb9d413ba94a348893ab4b35de60c~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1690509600&x-signature=GbBGXA0fFZlGJZ5NFbKQsS6FKP8%3D"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>miu_shiromine</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Miu Shiromine</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

import classNames from 'classnames/bind';
import Styles from './FooterSidebar.module.scss';

const cx = classNames.bind(Styles);

function FooterSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <a className={cx('link-footer')} href="https://www.tiktok.com/about?lang=en">
                    About
                </a>
                <a className={cx('link-footer')} href="https://newsroom.tiktok.com/">
                    Newsroom
                </a>
                <a className={cx('link-footer')} href="https://www.tiktok.com/about/contact?lang=en">
                    Contact
                </a>
                <a className={cx('link-footer')} href="https://careers.tiktok.com">
                    Careers
                </a>
                <a className={cx('link-footer')} href="https://www.bytedance.com/">
                    ByteDance
                </a>
            </div>
            <div className={cx('container')}>
                <a className={cx('link-footer')} href="https://www.tiktok.com/about?lang=en">
                    TikTok for Good
                </a>
                <a className={cx('link-footer')} href="https://newsroom.tiktok.com/">
                    Advertise
                </a>
                <a className={cx('link-footer')} href="https://www.tiktok.com/about/contact?lang=en">
                    Developers
                </a>
                <a className={cx('link-footer')} href="https://careers.tiktok.com">
                    Transparency
                </a>
                <a className={cx('link-footer')} href="https://www.bytedance.com/">
                    TikTok Rewards
                </a>
                <a className={cx('link-footer')} href="https://www.bytedance.com/">
                    TikTok Browse
                </a>
                <a className={cx('link-footer')} href="https://www.bytedance.com/">
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('container')}>
                <a className={cx('link-footer')} href="https://support.tiktok.com/en" data-e2e="legal-link">
                    Help
                </a>
                <a className={cx('link-footer')} href="https://www.tiktok.com/safety?lang=en" data-e2e="legal-link">
                    Safety
                </a>
                <a
                    className={cx('link-footer')}
                    href="https://www.tiktok.com/legal/terms-of-service?lang=en"
                    data-e2e="legal-link"
                >
                    Terms
                </a>
                <a
                    className={cx('link-footer')}
                    href="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
                    data-e2e="legal-link"
                >
                    Privacy
                </a>
                <a
                    className={cx('link-footer')}
                    href="https://www.tiktok.com/creators/creator-portal/en-us/"
                    data-e2e="legal-link"
                >
                    Creator Portal
                </a>
                <a
                    className={cx('link-footer')}
                    href="https://www.tiktok.com/community-guidelines?lang=en"
                    data-e2e="legal-link"
                >
                    Community Guidelines
                </a>
            </div>
            <span className={cx('copyright')} data-e2e="copyright">
                ©2022 TikTok- clone by Khuất Anhh
            </span>
        </div>
    );
}

export default FooterSidebar;

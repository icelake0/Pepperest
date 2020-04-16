import React, { Component } from 'react';
import { Header, HeaderAlternate, CommonHeader } from 'components/shared';
import { SettingsNavigationBar } from 'components/blocks';

export default function withDefaultLayout(WrappedComponent, data = {}) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSettings: false,
        hasCommonHeader: false,
        showCommonHeaderOnDesktop: false,
        ...data,
        ...props,
        isDesktop: false,
      };

      this.updateIsDesktop = this.updateIsDesktop.bind(this);
    }

    componentDidMount() {
      this.updateIsDesktop();
      window.addEventListener('resize', this.updateIsDesktop);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateIsDesktop);
    }

    updateIsDesktop() {
      this.setState({ isDesktop: window.innerWidth >= 1024 });
    }

    render() {
      const {
        hasAlternateHeader,
        isSettings,
        links,
        page,
        isDesktop,
        hasCommonHeader,
        showCart,
        commonHeaderTitle,
        showCommonHeaderOnDesktop,
        navBarTitle,
      } = this.state;
      return (
        <>
          {isSettings && !isDesktop ? null : <Header />}

          {!isSettings && !isDesktop ? null : (
            <SettingsNavigationBar navBarTitle={navBarTitle} />
          )}
          {/* show everywhere, but not on settings desktop view */}
          {hasAlternateHeader && !isSettings ? (
            <HeaderAlternate links={links} page={page} />
          ) : null}
          {/* show only in settings mobile view */}
          {hasAlternateHeader && isSettings && !isDesktop ? (
            <HeaderAlternate links={links} page={page} />
          ) : null}
          {hasCommonHeader && (showCommonHeaderOnDesktop || isDesktop) ? (
            <CommonHeader
              commonHeaderTitle={commonHeaderTitle}
              showCart={showCart}
            />
          ) : null}
          <div className="max-content">
            <WrappedComponent {...this.props} />
          </div>
        </>
      );
    }
  };
}

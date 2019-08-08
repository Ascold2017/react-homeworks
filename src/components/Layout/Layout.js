import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './Layout.css';
import SectionTitle from '../SectionTitle';
class Layout extends PureComponent {
  render() {
    const { header: Header, footer: Footer, children } = this.props;

    return (
      <React.Fragment>
        {Header && (
          <header className="header">
            <SectionTitle className="header__title">Header</SectionTitle>
            <div className="header__content">
              <Header />
            </div>
          </header>
        )}
        <main
          className={classNames([
            'main',
            { 'main--with-header': !!Header },
            { 'main--with-footer': !!Footer }
          ])}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>

        {Footer && (
          <footer className="footer">
            <Footer />
          </footer>
        )}
      </React.Fragment>
    );
  }
}

export default Layout;

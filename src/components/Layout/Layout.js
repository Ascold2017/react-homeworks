import React, { PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';
class Layout extends PureComponent {
  render() {
    const {
      header: Header,
      footer: Footer,
      children
    } = this.props;

    let mainClasses = ['main'];
    !!Header && mainClasses.push('main--with-header');
    !!Footer && mainClasses.push('main--with-footer');
    mainClasses = mainClasses.join(' ');
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
        <main className={mainClasses}>
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

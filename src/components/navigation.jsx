export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            EASTERN UNIVERSITY
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
                HOME
              </a>
            </li>
            <li>
              <a href='#QuizDetails' className='page-scroll'>
                QUIZ DETAILS
              </a>
            </li>
            <li>
              <a href='#Prize' className='page-scroll'>
                PRIZES
              </a>
            </li>
            <li>
              <a href='#Schedule' className='page-scroll'>
                SCHEDULE
              </a>
            </li>
            <li>
              <a href='#Registration' className='page-scroll'>
                REGISTRATION
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                GALLERY
              </a>
            </li>

            <li>
              <a href='#contact' className='page-scroll'>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

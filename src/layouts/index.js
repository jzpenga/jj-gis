import App from './App';

function BasicLayout(props) {
  return (
    <App>
      { props.children }
    </App>
  );
}

export default BasicLayout;

import { connect } from 'react-redux';
import Form from './Form';

function mapStoreToProps(store) {
  return {
    city: store.city
  }
}

export default connect(mapStoreToProps)(Form);
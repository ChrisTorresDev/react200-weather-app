import { connect } from "react-redux";
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        information: store.main.information
    }
}

export default connect(mapStoreToProps)(SearchHistory);
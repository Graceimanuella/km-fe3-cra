import { useState } from 'react';
import { useSelector } from "react-redux";
import { searchTrack } from "../../utils/fetchApi";
import Nav from '../Navbar';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Space } from 'antd';

function Searchbar({ onSuccess, clearSearch }) {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const [inputSearch, setInputSearch] = useState();
    const { accessToken } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await searchTrack(inputSearch, accessToken);
            const tracks = response.tracks.items;
            onSuccess(tracks);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <>
        <div>
            <Nav />
        </div>
            <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group fg-search">
                <Space direction="vertical">
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                    </Space>
                    <input type="submit" className="btn-green" value="Search" />
                </div>
            </form>
            
            <button className="btn btn-red btn-refresh" onClick={clearSearch}>
                Refresh
            </button>
        </>
    );
}

export default Searchbar;


import { Button } from "antd";
import React from "react";
import 'antd/dist/antd.less';

class MyExampleButton extends React.Component {
    render () {
        return <Button type="primary">Hello from {this.props.author}</Button>
    }
}
export default MyExampleButton;
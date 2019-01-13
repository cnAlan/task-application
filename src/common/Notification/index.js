import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, notification as notificationControl } from 'antd'

class Notification extends Component {
    render() {
        const {
            Notification,
            openNotification
        } = this.props
        if(Notification.size >= 1) {
            return (
                <div>
                    {
                        Notification.map(item=> {
                            const btn = (
                                <Button type="primary" size="small" onClick={() => notificationControl.close(item.get('key'))}>
                                    Confirm
                                </Button>
                            );
                            notificationControl.open({
                                message: item.get('title'),
                                description: item.get('content'),
                                btn,
                                key: item.get('key'),
                            })

                            return (
                                <div key={item.get('key')}></div>
                            )
                        })
                    }
                </div>
            )
        }

        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Notification: state.getIn(['notification', 'notification']),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openNotification(key){
            
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
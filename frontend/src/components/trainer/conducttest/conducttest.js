import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input,Button, Typography,Tabs, Icon  } from 'antd';
import './conducttes.css';
import { changeConducttestId, updateCandidatesTest,updateQuestiosnTest } from '../../../actions/conductTest';
import TestDetails from './details';
import Candidates from './candidates';
import Questions from './questions';
import Alert from '../../common/alert';
const { Title } = Typography;
const { TabPane } = Tabs;


class ConductTestS extends Component {
    constructor(props){
        super(props);
        this.props.changeConducttestId(this.props.testid);
        this.state={
            localTestId:null,
            needRedirect:false
        }
    }

    ChangeLocalTestId = (d)=>{
        this.setState({
            localTestId : d.target.value
        })
    }

    ChangetestId = (d)=>{
        if(this.state.localTestId) {
            this.setState({
                needRedirect:true
            })
        } else {
            Alert('warning','Không hợp lệ','Vui lòng nhập Id bài thi')
        }
    }



    render() {
        if(this.state.needRedirect){
            return window.location.href=`/user/conducttest?testid=${this.state.localTestId}`
        }
        else{
            return (
                <div className="conduct-test-main-wrapper">
                    {!this.props.conduct.id ? 
                    <div>
                        <Title style={{width:'100%',textAlign:'center'}} level={4}>Nhập Id bài thi</Title>
                        <div className="test-conduct-testid-form">
                            <Input placeholder="Id bài thi" onChange={this.ChangeLocalTestId} value={this.state.localTestId}/>
                            <Button onClick={this.ChangetestId}  type="primary" style={{marginTop:'30px'}}>Tiếp tục</Button>
                        </div>
                    </div>:
                    <div>
                        <CC key={this.props.conduct.basictestdetails.testconducted} />
                    </div>}
                </div>
            )
        }
    }
}




class C extends Component {
    render() {
        console.log(this.props.conduct.basictestdetails.testconducted);
        if(this.props.conduct.basictestdetails.testconducted){
            return(
                <div className="reasendmail-container-register">
                    <Title style={{color:'#fff'}} level={4}>Bài kiểm tra đã kết thúc, vào quản lý đề để xem kết quả</Title>    
                </div>
            )
        }
        else{
            return (
                <div>
                    <TestDetails/>
                    <Tabs defaultActiveKey="1" style={{marginTop:'20px'}}>
                        <TabPane tab={<span><Icon type="user" />Danh sách đăng ký</span>} key="1">
                            <Candidates />
                        </TabPane>
                        <TabPane tab={<span><Icon type="question-circle" />Câu hỏi</span>} key="2">
                            <Questions id={this.props.conduct.id} questionsOfTest={this.props.conduct.questionsOfTest} updateQuestiosnTest={this.props.updateQuestiosnTest}  />
                        </TabPane>
                    </Tabs>
                </div>
            )
        }
        
    }
}




const mapStateToProps = state => ({
    trainer : state.trainer,
    conduct : state.conduct
});


let CC=connect(mapStateToProps,{
    changeConducttestId,
    updateCandidatesTest,
    updateQuestiosnTest
})(C);


export default connect(mapStateToProps,{
    changeConducttestId,
    updateCandidatesTest,
    updateQuestiosnTest
})(ConductTestS);
import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;
export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	/* border: 1px solid #dcdcdc; */
	border-radius: 3px;
	height: 350px;
	/* text-align: center; */
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`

export const WriteTitle = styled.div`
	width: 278px;
	height: 19px;
	font-size: 14px;
	/* border: 1px solid red; */
	line-height: 19px;
	text-align: left;
	color: #969696
`

export const WriteTitleWrapper = styled.ul`
	width: 278px;
	height: 300px;
	font-size: 12px;
	/* border: 1px solid red; */
`

export const WriteItem = styled.li`
		width: 278px;
		height: 47px;
		list-style: none;
		/* border: 1px solid red; */
		position: relative;
		display: block;
		margin-top: 15px;
		.author-img{
			display: inline-block;
			position: absolute;
			left: 0px;
			top: 0px;
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
		.author-fllow{
			position: absolute;
			width: 39px;
			height: 17px;
			right: 50px;
			color: #42c02e;
		}
`
export const WriteInfoWrapper = styled.a`
	display: block;
	width: 278px;
	margin-left: 52px;
	padding-top: 7px;
	height: 25px;
	position: relative;
	font-size: 14px;
	color: #333;
`

export const WriteInfo = styled.p`
	width: 278px;
	margin-left: 52px;
	height: 20px;
	font-size: 12px;
	color: #969696;
	margin-top: -2px;
`

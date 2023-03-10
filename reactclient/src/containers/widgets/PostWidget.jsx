import {
  ChatBubbleOutlineOutlined,
  VisibilityOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import UserImage from "components/UserImage";
import config from "config";

dayjs.extend(relativeTime);
const ASPBACKEND = config.ASPBACKEND;

const PostWidget = ({
  postId,
  categoryId,
  categoryTitle,
  commentCount,
  createdDate,
  lastCommentDate,
  lastCommentUserId,
  lastCommentUsername,
  title,
  userId,
  username,
  views
}) => {
  const [isComments, setIsComments] = useState(false);
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const light = palette.neutral.light;
  const primary = palette.primary.main;
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const showLastPost = isNonMobile;

  return (
    <WidgetWrapper m="1rem 0" display="flex" >
      <Box m="0.5rem" display="flex" alignItems="center" >
        <UserImage size="35px" />
      </Box>
      <Box mx="1rem" my="0.5rem" display="flex" flexDirection="column" alignItems="flex-start" width={showLastPost ? "60%" : "100%"}>
        <Typography color={main} variant="h5" fontWeight="500">{title}</Typography>
        <Typography color={main} variant="body2">{`${username}, ${dayjs(createdDate).fromNow()}, in ${categoryTitle}`}</Typography>
        <FlexBetween gap="0.5rem" mt="0.25rem">
          <FlexBetween gap="0.25rem">
            <ChatBubbleOutlineOutlined fontSize="small" />
            <Typography color={main} variant="subtitle1">{commentCount}</Typography>
          </FlexBetween>
          <FlexBetween gap="0.25rem">
            <VisibilityOutlined fontSize="small" />
            <Typography color={main} variant="subtitle1">{views}</Typography>
          </FlexBetween>
        </FlexBetween>
      </Box>
      {showLastPost &&
      <>
        <Box width="40%" display="flex" alignItems="center" >
          <Divider orientation="vertical" color={light} flexItem />
          <Box m="1rem" display="flex" alignItems="center" >
            <UserImage size="35px" />
          </Box>
          <Box m="0.25rem" display="flex" flexDirection="column" alignItems="flex-start">
            <Typography color={main} variant="body2">{`${lastCommentUsername}, ${dayjs(lastCommentDate).fromNow()}`}</Typography>
          </Box>
        </Box>
      </>
      }
    </WidgetWrapper>
  );
};

export default PostWidget;

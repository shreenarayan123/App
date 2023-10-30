import PropTypes from 'prop-types';
import React from 'react';
import reportActionSourcePropType from '@pages/home/report/reportActionSourcePropType';
import RenderHTML from '@components/RenderHTML';

const propTypes = {
    /** The reportAction's source */
    source: reportActionSourcePropType.isRequired,

    /** The comment's HTML */
    html: PropTypes.string.isRequired,
};

function RenderCommentHTML(props) {
    const html = props.html;

    return <RenderHTML html={props.source === 'email' ? `<email-comment>${html}</email-comment>` : `<comment>${html}</comment>`} />;
}

RenderCommentHTML.propTypes = propTypes;
RenderCommentHTML.displayName = 'RenderCommentHTML';

export default RenderCommentHTML;

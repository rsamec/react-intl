/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
import React from '../react';

import IntlMixin from '../mixin';

var FormattedDate = React.createClass({
    displayName: 'FormattedDate',
    mixins     : [IntlMixin],

    statics: {
        formatOptions: [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ]
    },

    propTypes: {
        format: React.PropTypes.string,
        value : React.PropTypes.any.isRequired
    },

    getDefaultProps: function () {
        return {tagName: 'span'};
    },

    render: function () {
        var props    = this.props;
        var tagName  = props.tagName;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('date', format);
        var options  = FormattedDate.filterFormatOptions(props, defaults);

        return React.DOM[tagName](null, this.formatDate(value, options));
    }
});

export default FormattedDate;

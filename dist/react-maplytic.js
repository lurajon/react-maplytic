(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'axios', 'react'], factory) :
	(factory((global['@lurajon/react-maplytic'] = {}),global.axios,global.React));
}(this, (function (exports,axios,React) { 'use strict';

axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
var React__default = 'default' in React ? React['default'] : React;

// Maplytic replaces the placeholder with its own address
var connection = axios.create({
    baseURL: 'https://lurajon.maplytic.no/'
});

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var Flow = function Flow() {
    var _useState = React.useState(),
        _useState2 = slicedToArray(_useState, 2),
        flows = _useState2[0],
        setFlows = _useState2[1];

    React.useEffect(function () {
        var fetchFlows = function fetchFlows() {
            connection.get("/flow").then(function (response) {
                setFlows({ jobs: response });
            }).catch(function (error) {
                console.log(error);
            });
        };

        fetchFlows();
    });

    return React__default.createElement(
        'div',
        null,
        React__default.createElement(
            'h3',
            null,
            'Flows'
        ),
        React__default.createElement(
            'ul',
            null,
            flows && flows.map(function (flow) {
                return React__default.createElement(
                    'li',
                    { key: flow.id },
                    flow.name
                );
            })
        )
    );
};

var useForm = function useForm(callback) {
    var _useState = React.useState({}),
        _useState2 = slicedToArray(_useState, 2),
        values = _useState2[0],
        setValues = _useState2[1];

    var handleSubmit = function handleSubmit(event) {
        if (event) event.preventDefault();
        callback();
    };

    var handleChange = function handleChange(event) {
        event.persist();
        setValues(function (values) {
            return _extends({}, values, defineProperty({}, event.target.name, event.target.value));
        });
    };

    return {
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        values: values
    };
};

var Login = function Login(props) {
    var storageKey = props && props.tokenKey || 'maplytic.token';

    var login = function login() {
        var bodyFormData = new FormData();

        bodyFormData.set('username', values.username);
        bodyFormData.set('password', values.password);
        console.log(bodyFormData);

        connection.post('/login', 'username=' + values.username + '&password=' + values.password, { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' } }).then(function (response) {
            console.log(response.headers);
        }).catch(function (error) {
            console.log(error);
        });
    };

    var _useForm = useForm(login),
        values = _useForm.values,
        handleChange = _useForm.handleChange,
        handleSubmit = _useForm.handleSubmit;

    return React__default.createElement(
        'form',
        { onSubmit: handleSubmit },
        React__default.createElement(
            'div',
            null,
            React__default.createElement(
                'label',
                null,
                'Username'
            ),
            React__default.createElement('input', { type: 'text', name: 'username', value: values.username, onChange: handleChange })
        ),
        React__default.createElement(
            'div',
            null,
            React__default.createElement(
                'label',
                null,
                'Password'
            ),
            React__default.createElement('input', { type: 'password', name: 'password', value: values.password, onChange: handleChange })
        ),
        React__default.createElement(
            'div',
            null,
            React__default.createElement(
                'button',
                { type: 'submit' },
                'Login'
            )
        )
    );
};

exports.Flow = Flow;
exports.Login = Login;
exports.useForm = useForm;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-maplytic.js.map

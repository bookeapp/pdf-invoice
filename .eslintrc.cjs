module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "plugins": [
    "filenames",
    "import",
    "no-loops",
    "promise",
    "sort-class-members",
    "sort-imports-es6-autofix",
    "sort-imports-es6-autofix",
    "unicorn",
    "node"
  ],
  "settings": {
    "import/resolver": "node"
  },
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "array-element-newline": [
      "error",
      "consistent"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "capitalized-comments": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-return": "error",
    "consistent-this": [
      "error",
      "self"
    ],
    "constructor-super": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "always"
    ],
    "filenames/match-exported": [
      "error",
      "kebab",
      null,
      true
    ],
    "filenames/match-regex": [
      "error",
      "^[a-z-]+$"
    ],
    "for-direction": "error",
    "func-call-spacing": [
      "error",
      "never"
    ],
    "func-names": [
      "error",
      "never"
    ],
    "func-style": [
      "error",
      "expression"
    ],
    "function-call-argument-newline": [
      "warn",
      "consistent"
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ],
    "getter-return": "error",
    "guard-for-in": "error",
    "id-length": [
      "error",
      {
        "min": 2,
        "properties": "never"
      }
    ],
    "id-match": [
      "error",
      "^(?![iI]s[A-Z])(([A-Z]?[a-z]+)+[A-Z]?|[A-Z](_?[A-Z])+)$",
      {
        "onlyDeclarations": true
      }
    ],
    "import/default": "error",
    "import/exports-last": "error",
    "import/first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-mutable-exports": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": [
      "error",
      {
        "caseSensitive": false
      }
    ],
    "import/no-useless-path-segments": "error",
    "import/prefer-default-export": "error",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": [
      "error",
      {
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "after": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "max-classes-per-file": [
      "error",
      1
    ],
    "max-depth": [
      "error",
      10
    ],
    "max-len": [
      "error",
      {
        "code": 130
      }
    ],
    "max-nested-callbacks": [
      "error",
      10
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true
      }
    ],
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-catch-shadow": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loops/no-loops": "error",
    "no-magic-numbers": [
      "error",
      {
        "detectObjects": true,
        "ignore": [
          -1,
          0,
          1
        ]
      }
    ],
    "no-misleading-character-class": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "off",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    "no-undef": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": [
      "error",
      {
        "caughtErrors": "none",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "node/callback-return": "error",
    "node/exports-style": [
      "error",
      "module.exports"
    ],
    "node/file-extension-in-import": [
      "error",
      "always"
    ],
    "node/no-callback-literal": "error",
    "node/no-deprecated-api": "error",
    "node/no-exports-assign": "error",
    "node/no-extraneous-import": "error",
    "node/no-extraneous-require": "error",
    "node/no-missing-import": "error",
    "node/no-missing-require": "error",
    "node/no-mixed-requires": [
      "error",
      {
        "allowCall": true
      }
    ],
    "node/no-new-require": "error",
    "node/no-process-exit": "error",
    "node/no-sync": "error",
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/node-builtins": "error",
    "node/prefer-global/buffer": [
      "error",
      "always"
    ],
    "node/prefer-global/console": [
      "error",
      "always"
    ],
    "node/prefer-global/process": [
      "error",
      "always"
    ],
    "node/prefer-global/text-decoder": [
      "error",
      "always"
    ],
    "node/prefer-global/text-encoder": [
      "error",
      "always"
    ],
    "node/prefer-global/url": [
      "error",
      "always"
    ],
    "node/prefer-global/url-search-params": [
      "error",
      "always"
    ],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-shorthand": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],
    "operator-assignment": [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "before"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "padding-line-between-statements": [
      "warn",
      {
        "blankLine": "always",
        "prev": "const",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "let",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "var",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "const"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "let"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "var"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "AssignmentExpression": {
          "array": false,
          "object": false
        },
        "VariableDeclarator": {
          "array": true,
          "object": true
        }
      }
    ],
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "promise/no-callback-in-promise": "error",
    "promise/no-new-statics": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-return-in-finally": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/valid-params": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "radix": "error",
    "require-atomic-updates": "error",
    "require-await": "error",
    "require-yield": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": "error",
    "semi-style": [
      "error",
      "last"
    ],
    "sort-class-members/sort-class-members": [
      "error",
      {
        "groups": {
          "event-handlers": [
            {
              "name": "/^handle.+/",
              "static": false,
              "type": "method"
            }
          ],
          "get-methods": [
            {
              "name": "/^get.*$/",
              "static": false,
              "type": "method"
            }
          ],
          "private-properties": [
            {
              "name": "/undefined/",
              "type": "method"
            }
          ],
          "set-methods": [
            {
              "name": "/^set.*$/",
              "static": false,
              "type": "method"
            }
          ],
          "static-get-methods": [
            {
              "name": "/^get.*$/",
              "static": true,
              "type": "method"
            }
          ],
          "static-set-methods": [
            {
              "name": "/^set.*$/",
              "static": true,
              "type": "method"
            }
          ]
        },
        "order": [
          "[static-properties]",
          "[static-get-methods]",
          "[static-set-methods]",
          "[static-methods]",
          "[private-properties]",
          "[properties]",
          "constructor",
          "[getters]",
          "[setters]",
          "[get-methods]",
          "[set-methods]",
          "[methods]",
          "[event-handlers]"
        ]
      }
    ],
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        "words": true
      }
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "switch-colon-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": [
      "error",
      "always"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "unicorn/custom-error-definition": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-fn-reference-in-iterator": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-dataset": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/regex-shorthand": "error",
    "unicorn/throw-new-error": "error",
    "use-isnan": "error",
    "valid-jsdoc": "error",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "wrap-iife": [
      "error",
      "any"
    ],
    "yield-star-spacing": [
      "error",
      "after"
    ],
    "yoda": [
      "error",
      "never"
    ]
  }
}

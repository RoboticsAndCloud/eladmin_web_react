const mockProfileInfomation =  {
  "account_info": {
    "account_id": 1,
    "name": "admin",
    "given_name": "given_name",
    "email": "admin@email",
    "phone": "123456789",
    "mobile": "123456789",
    "status": 0,
    "create_time": "20230606",
    "update_time": "20230607",
    "role_ids?": "22"
  },
  "privilege_list": [
    {
      "privilege_info": {
        "privilege_id": 1,
        "name": "Index",
        "parent_id": 0,
        "parent_ids": "0",
        "privilege_type": 1,
        "page_router": "/privilege/",
        "api_path": "add",
        "icon": "",
        "is_display": 1,
        "sequence": 1,
        "create_time": "20230606",
        "update_time": "20230606"
      },
      "child_privileges": [
        {
          "privilege_info": {
            "privilege_id": 11,
            "name": "首页",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/eladmin_web_react",
            "api_path": "/",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": []
        },
        {
          "privilege_info": {
            "privilege_id": 12,
            "name": "系统管理",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/privilege/",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 13,
                "name": "用户管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/account/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 14,
                "name": "角色管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/role/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 15,
                "name": "菜单管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/menu/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 16,
                "name": "部门管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 17,
                "name": "岗位管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 18,
                "name": "字典管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 19,
                "name": "任务调度",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 22,
            "name": "系统监控",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "#",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 23,
                "name": "在线用户",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 24,
                "name": "操作日志",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/log/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 25,
                "name": "异常日志",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/log/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 26,
                "name": "服务监控",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 3,
            "name": "运维管理",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "#",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 33,
                "name": "服务器",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 34,
                "name": "应用管理",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 35,
                "name": "部署管理",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 36,
                "name": "部署备份",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 37,
                "name": "数据库管理",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 4,
            "name": "系统工具",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "#",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 43,
                "name": "代码生成",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 44,
                "name": "存储管理",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 45,
                "name": "邮件工具",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 46,
                "name": "支付宝工具",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 5,
            "name": "组件管理",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "#",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 53,
                "name": "图表库",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 54,
                "name": "图标库",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 55,
                "name": "富文本",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 56,
                "name": "Markdown",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 57,
                "name": "Yaml编辑器",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 6,
            "name": "多级菜单",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "#",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 63,
                "name": "添加",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 64,
                "name": "修改",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 65,
                "name": "删除",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 66,
                "name": "列表",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "#",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        }
      ]
    }
  ]
}

const mockAccountList = {
  "list": [
    {
      "account_id": 1,
      "name": "admin",
      "given_name": "given_name",
      "email": "admin@email",
      "phone": "123456789",
      "mobile": "123456789",
      "status": 0,
      "create_time": "20230606",
      "update_time": "20230607",
      "role_ids?": "22"
    },
    {
      "account_id": 2,
      "name": "test",
      "given_name": "test",
      "email": "test@email",
      "phone": "123456789",
      "mobile": "123456789",
      "status": 1,
      "create_time": "20230806",
      "update_time": "20230807",
      "role_ids?": "2"
    }
  ],
  "page_info": {
    "total_num": 2,
    "total_page": 1,
    "page_size": 10,
    "page_num": 1,
    "has_next": 0
  }
}

const mockRoleList = {
  "list": [
    {
      "role_id": 1,
      "name": "admin",
      "remark": "admin",
      "status": 1,
      "role_type": 1,
      "create_time": "20230606",
      "update_time": "20230606"
    },
    {
      "role_id": 2,
      "name": "test",
      "remark": "test",
      "status": 0,
      "role_type": 0,
      "create_time": "20230606",
      "update_time": "20230606"
    },
    {
      "role_id": 3,
      "name": "test2",
      "remark": "test",
      "status": 2,
      "role_type": 2,
      "create_time": "20230606",
      "update_time": "20230606"
    }
  ],
  "page_info": {
    "total_num": 2,
    "total_page": 1,
    "page_size": 10,
    "page_num": 1,
    "has_next": 0
  }
}

const mockAccountDetails = {
  "account_info": {
    "account_id": 1,
    "name": "admin",
    "given_name": "given_name",
    "email": "admin@email",
    "phone": "123456789",
    "mobile": "123456789",
    "status": 0,
    "create_time": "20230606",
    "update_time": "20230607",
    "role_ids": "22"
  },
  "account_roles": [
    {
      "role_id": 1,
      "name": "admin",
      "remark": "test",
      "status": 1,
      "role_type": 1,
      "create_time": "20230606",
      "update_time": "20230606"
    }
  ],
  "role_list": []
}

const mockRoleDetails = {
  "role_info": {
    "role_id": 1,
    "name": "admin",
    "remark": "admin",
    "status": 1,
    "role_type": 1,
    "create_time": "20230606",
    "update_time": "20230606"
  }
}

const mockRolePrivilegeType = {
  "all_privilege": [
    {
      "privilege_info": {
        "privilege_id": 1,
        "name": "Index",
        "parent_id": 0,
        "parent_ids": "0",
        "privilege_type": 1,
        "page_router": "/privilege/",
        "api_path": "add",
        "icon": "",
        "is_display": 1,
        "sequence": 1,
        "create_time": "20230606",
        "update_time": "20230606"
      },
      "child_privileges": [
        {
          "privilege_info": {
            "privilege_id": 11,
            "name": "首页",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/",
            "api_path": "/",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": []
        },
        {
          "privilege_info": {
            "privilege_id": 12,
            "name": "系统管理",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/privilege/",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 13,
                "name": "用户管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/account/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 14,
                "name": "角色管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/role/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 15,
                "name": "菜单管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/menu/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 16,
                "name": "部门管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 17,
                "name": "岗位管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 18,
                "name": "字典管理",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 19,
                "name": "任务调度",
                "parent_id": 1,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/log/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 22,
            "name": "系统监控",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/privilege/",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 23,
                "name": "在线用户",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/add",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 24,
                "name": "操作日志",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/log/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 25,
                "name": "异常日志",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 26,
                "name": "服务监控",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 3,
            "name": "运维管理",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/privilege/",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 33,
                "name": "服务器",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/add",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 34,
                "name": "应用管理",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 35,
                "name": "部署管理",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 36,
                "name": "部署备份",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 37,
                "name": "数据库管理",
                "parent_id": 3,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 4,
            "name": "系统工具",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/privilege/",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 43,
                "name": "代码生成",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/add",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 44,
                "name": "存储管理",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 45,
                "name": "邮件工具",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 46,
                "name": "支付宝工具",
                "parent_id": 4,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 5,
            "name": "组件管理",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/privilege/",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 53,
                "name": "图表库",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/add",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 54,
                "name": "图标库",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 55,
                "name": "富文本",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 56,
                "name": "Markdown",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 57,
                "name": "Yaml编辑器",
                "parent_id": 5,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        },
        {
          "privilege_info": {
            "privilege_id": 6,
            "name": "多级菜单",
            "parent_id": 1,
            "parent_ids": "1",
            "privilege_type": 2,
            "page_router": "/privilege/",
            "api_path": "add",
            "icon": "",
            "is_display": 1,
            "sequence": 1,
            "create_time": "20230606",
            "update_time": "20230606"
          },
          "child_privileges": [
            {
              "privilege_info": {
                "privilege_id": 63,
                "name": "添加",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/add",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 64,
                "name": "修改",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 65,
                "name": "删除",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            },
            {
              "privilege_info": {
                "privilege_id": 66,
                "name": "列表",
                "parent_id": 22,
                "parent_ids": "1",
                "privilege_type": 2,
                "page_router": "/privilege/list",
                "api_path": "add",
                "icon": "",
                "is_display": 1,
                "sequence": 1,
                "create_time": "20230606",
                "update_time": "20230606"
              },
              "child_privileges": []
            }
          ]
        }
      ]
    }
  ],
  "privilege_ids": [
    1
  ]
}



const mockMenuList = [
        {
          "privilege_id": 11,
          "name": "首页",
          "parent_id": 1,
          "parent_ids": "1",
          "privilege_type": 2,
          "page_router": "/eladmin_web_react",
          "api_path": "/",
          "icon": "",
          "is_display": 1,
          "sequence": 1,
          "create_time": "20230606",
          "update_time": "20230606",
            children: []
        },
        {
          "privilege_id": 12,
          "name": "系统管理",
          "parent_id": 1,
          "parent_ids": "1",
          "privilege_type": 2,
          "page_router": "/privilege/",
          "api_path": "add",
          "icon": "",
          "is_display": 1,
          "sequence": 1,
          "create_time": "20230606",
          "update_time": "20230606",
         
          children: [
            {
              "privilege_id": 13,
              "name": "用户管理",
              "parent_id": 1,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "/account/list",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 14,
              "name": "角色管理",
              "parent_id": 1,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "/role/list",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 15,
              "name": "菜单管理",
              "parent_id": 1,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              children: []
            },
            {
              "privilege_id": 16,
              "name": "部门管理",
              "parent_id": 1,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 17,
              "name": "岗位管理",
              "parent_id": 1,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 18,
              "name": "字典管理",
              "parent_id": 1,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 19,
              "name": "任务调度",
              "parent_id": 1,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
             
              children: []
            }
          ]
        },
        {
          "privilege_id": 22,
          "name": "系统监控",
          "parent_id": 1,
          "parent_ids": "1",
          "privilege_type": 2,
          "page_router": "#",
          "api_path": "add",
          "icon": "",
          "is_display": 1,
          "sequence": 1,
          "create_time": "20230606",
          "update_time": "20230606",
          
          children: [
            {
              "privilege_id": 23,
              "name": "在线用户",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
             
              children: []
            },
            {
              "privilege_id": 24,
              "name": "操作日志",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "/log/list",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 25,
              "name": "异常日志",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "/log/list",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 26,
              "name": "服务监控",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            }
          ]
        },
        {
          "privilege_id": 3,
          "name": "运维管理",
          "parent_id": 1,
          "parent_ids": "1",
          "privilege_type": 2,
          "page_router": "#",
          "api_path": "add",
          "icon": "",
          "is_display": 1,
          "sequence": 1,
          "create_time": "20230606",
          "update_time": "20230606",
          
          children: [
            {
              "privilege_id": 33,
              "name": "服务器",
              "parent_id": 3,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 34,
              "name": "应用管理",
              "parent_id": 3,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 35,
              "name": "部署管理",
              "parent_id": 3,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 36,
              "name": "部署备份",
              "parent_id": 3,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              "children": []
            },
            {
              "privilege_id": 37,
              "name": "数据库管理",
              "parent_id": 3,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            }
          ]
        },
        {
          "privilege_id": 4,
          "name": "系统工具",
          "parent_id": 1,
          "parent_ids": "1",
          "privilege_type": 2,
          "page_router": "#",
          "api_path": "add",
          "icon": "",
          "is_display": 1,
          "sequence": 1,
          "create_time": "20230606",
          "update_time": "20230606",
          
          children: [
            {
              "privilege_id": 43,
              "name": "代码生成",
              "parent_id": 4,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 44,
              "name": "存储管理",
              "parent_id": 4,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 45,
              "name": "邮件工具",
              "parent_id": 4,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 46,
              "name": "支付宝工具",
              "parent_id": 4,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            }
          ]
        },
        {
          "privilege_id": 5,
          "name": "组件管理",
          "parent_id": 1,
          "parent_ids": "1",
          "privilege_type": 2,
          "page_router": "#",
          "api_path": "add",
          "icon": "",
          "is_display": 1,
          "sequence": 1,
          "create_time": "20230606",
          "update_time": "20230606",
          
          children: [
            {
              "privilege_id": 53,
              "name": "图表库",
              "parent_id": 5,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 54,
              "name": "图标库",
              "parent_id": 5,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 55,
              "name": "富文本",
              "parent_id": 5,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 56,
              "name": "Markdown",
              "parent_id": 5,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 57,
              "name": "Yaml编辑器",
              "parent_id": 5,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            }
          ]
        },
        {
          "privilege_id": 6,
          "name": "多级菜单",
          "parent_id": 1,
          "parent_ids": "1",
          "privilege_type": 2,
          "page_router": "#",
          "api_path": "add",
          "icon": "",
          "is_display": 1,
          "sequence": 1,
          "create_time": "20230606",
          "update_time": "20230606",
          
          children: [
            {
              "privilege_id": 63,
              "name": "添加",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 64,
              "name": "修改",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              
              children: []
            },
            {
              "privilege_id": 65,
              "name": "删除",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              children: []
            },
            {
              "privilege_id": 66,
              "name": "列表",
              "parent_id": 22,
              "parent_ids": "1",
              "privilege_type": 2,
              "page_router": "#",
              "api_path": "add",
              "icon": "",
              "is_display": 1,
              "sequence": 1,
              "create_time": "20230606",
              "update_time": "20230606",
              children: []
            }
          ]
        }
      ]




export default mockProfileInfomation
export {
  mockAccountList,
  mockRoleList, 
  mockAccountDetails,
  mockRoleDetails,
  mockRolePrivilegeType,
  mockMenuList
}


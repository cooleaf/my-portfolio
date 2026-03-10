#!/bin/bash
# 腾讯云部署脚本
# 使用方法: ./deploy-to-tencent.sh

set -e

echo "🚀 开始部署到腾讯云..."

# 配置变量（请根据实际情况修改）
COS_BUCKET="your-bucket-name"
COS_REGION="ap-shanghai"
LOCAL_BUILD_DIR="dist"

# 检查 tccli 是否安装
if ! command -v tccli &> /dev/null; then
    echo "❌ 未找到 tccli，正在安装..."
    pip3 install tccli || pip install tccli
fi

# 检查是否已登录
if ! tccli configure list &> /dev/null; then
    echo "⚠️  请先配置腾讯云凭证: tccli configure"
    exit 1
fi

echo "📦 构建项目..."
npm run build

echo "☁️  上传到腾讯云 COS..."
tccli cos upload-r \
    --bucket "${COS_BUCKET}" \
    --region "${COS_REGION}" \
    --local-path "${LOCAL_BUILD_DIR}" \
    --cos-path "/" \
    --recursive

echo "✅ 部署完成！"
echo "🌐 访问地址: http://${COS_BUCKET}.cos-website.${COS_REGION}.myqcloud.com"

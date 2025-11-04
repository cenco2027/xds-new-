# HandBrake 视频压缩参数指南

## 目标
- 原始大小：169.45 MB
- 目标大小：< 50 MB
- 帧率：60 fps（保持）
- 清晰度：尽可能保持

## HandBrake 参数设置

### 方法一：使用 CRF（恒定质量因子）- 推荐

**预设配置：**
1. **Preset（预设）**：选择 `Fast 1080p30` 然后修改为自定义
   - 或者选择 `General -> Fast 1080p30` 作为起点

2. **Video（视频选项卡）**：
   - **Video Codec（视频编码器）**：`H.264 (x264)` 或 `H.265 (x265)`
     - x265 压缩率更高，但编码时间更长
     - x264 兼容性更好，速度更快
   - **Framerate（帧率）**：
     - 选择 `Same as source` 或手动设置为 `60`
     - 取消勾选 `Variable Framerate`
   - **Constant Quality（恒定质量）**：
     - **RF（Rate Factor）**：设置为 `20-22`
       - 20 = 高质量（文件可能稍大）
       - 22 = 平衡质量和大小（推荐）
       - 如果文件仍超过 50MB，可尝试 23-24
   - **Encoder Preset（编码预设）**：`Medium` 或 `Slow`
     - Medium = 平衡速度和质量
     - Slow = 更好的质量，但编码时间更长
   - **Encoder Profile（编码配置文件）**：`high`
   - **Encoder Level（编码级别）**：`4.0` 或 `4.2`

3. **Dimensions（尺寸选项卡）**：
   - **Resolution Limit（分辨率限制）**：保持原分辨率（2K）
   - 或者可以稍微降低到 1920x1080（如果原文件是 2560x1440）

4. **Audio（音频选项卡）**：
   - **Codec（编码器）**：`AAC (avcodec)`
   - **Bitrate（比特率）**：`128 kbps` 或 `160 kbps`
   - 如果视频较大，可以降低到 `96 kbps`

### 方法二：使用 2-Pass 编码（精确控制文件大小）

**如果方法一无法达到精确的 50MB 目标，使用此方法：**

1. **Video（视频选项卡）**：
   - **Video Codec（视频编码器）**：`H.264 (x264)` 或 `H.265 (x265)`
   - **Framerate（帧率）**：`60` 或 `Same as source`
   - **Quality（质量）**：选择 `Average Bitrate (kbps)`
   - **Bitrate（比特率）**：计算值
     - 目标：50MB = 50 × 8 = 400 Mb
     - 假设视频时长 T 秒，音频 128 kbps
     - 视频比特率 = (400 × 1024 × 8) / T - 128
     - 例如：60秒视频 = (400 × 1024 × 8) / 60 - 128 ≈ 5300 kbps
     - 例如：30秒视频 = (400 × 1024 × 8) / 30 - 128 ≈ 10500 kbps
   - **2-Pass Encoding（2次编码）**：✓ 勾选
   - **Turbo First Pass（快速第一次编码）**：✓ 勾选
   - **Encoder Preset（编码预设）**：`Medium` 或 `Slow`
   - **Encoder Profile（编码配置文件）**：`high`
   - **Encoder Level（编码级别）**：`4.0` 或 `4.2`

2. **Audio（音频选项卡）**：
   - **Codec（编码器）**：`AAC (avcodec)`
   - **Bitrate（比特率）**：`128 kbps`

## 推荐的完整设置（方法一 - CRF）

### 快速设置步骤：

1. **打开 HandBrake**
2. **Source（源文件）**：选择 `assets/v/TDF Bike-Final-2K.mp4`
3. **Preset（预设）**：选择 `General -> Fast 1080p30`

4. **Video 选项卡**：
   ```
   Video Codec: H.264 (x264)
   Framerate: Same as source
   Constant Quality: RF 22
   Encoder Preset: Medium
   Encoder Profile: high
   Encoder Level: 4.0
   ```

5. **Audio 选项卡**：
   ```
   Codec: AAC (avcodec)
   Bitrate: 128 kbps
   ```

6. **开始编码**

## 如果文件仍超过 50MB 的调整方案

如果第一次编码后文件仍超过 50MB，按以下顺序调整：

1. **降低 RF 值**：从 22 → 23 → 24
   - 每次降低 1，重新编码测试

2. **降低分辨率**：
   - 如果原文件是 2560x1440，降低到 1920x1080
   - 在 Dimensions 选项卡中设置

3. **使用 x265 编码器**：
   - 相同质量下文件更小，但编码时间更长

4. **降低音频比特率**：
   - 从 128 kbps → 96 kbps

5. **使用 2-Pass 编码**：
   - 切换到方法二，精确控制比特率

## x265 设置（如果使用 H.265）

如果选择 x265 编码器：
- **Video Codec**：`H.265 (x265)`
- **RF**：可以设置为 `24-26`（x265 的 RF 范围与 x264 不同）
- **Encoder Preset**：`medium` 或 `slow`
- **Profile**：`main` 或 `main10`

## 注意事项

1. **编码时间**：Slow 预设质量更好但耗时更长
2. **兼容性**：x264 兼容性更好，x265 文件更小
3. **测试**：建议先用一小段视频测试参数
4. **预览**：使用 HandBrake 的预览功能检查质量

## 预计结果

- **RF 22 + x264 + Medium**：文件大小约 40-60MB（取决于内容复杂度）
- **RF 24 + x265 + Medium**：文件大小约 30-50MB（更好的压缩率）



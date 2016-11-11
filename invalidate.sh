#!/usr/bin/env bash

INVALIDATION_BATCH_ID=$(uuidgen)
INVALIDATION_JSON="{
    \"DistributionId\": \"E1VWB5YJWQAW7X\",
    \"InvalidationBatch\": {
        \"Paths\": {
            \"Quantity\": 1,
            \"Items\": [
                \"$1\"
            ]
        },
        \"CallerReference\": \"$INVALIDATION_BATCH_ID\"
    }
}"

aws cloudfront create-invalidation --cli-input-json "$INVALIDATION_JSON"

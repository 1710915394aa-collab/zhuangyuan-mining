"use client";

import { Calculator, Coins, Gauge, PlugZap } from "lucide-react";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

type CalculatorState = {
  btcPrice: string;
  hashrate: string;
  power: string;
  electricity: string;
  machinePrice: string;
};

const defaults: CalculatorState = {
  btcPrice: "68000",
  hashrate: "200",
  power: "3500",
  electricity: "0.04",
  machinePrice: "4200"
};

const parseNumber = (value: string) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export function MiningCalculator({ locale }: { locale: Locale }) {
  const [values, setValues] = useState<CalculatorState>(defaults);
  const estimatedBtcPerThDay = 0.00000045;

  const results = useMemo(() => {
    const btcPrice = parseNumber(values.btcPrice);
    const hashrate = parseNumber(values.hashrate);
    const power = parseNumber(values.power);
    const electricity = parseNumber(values.electricity);
    const machinePrice = parseNumber(values.machinePrice);

    const powerKw = power / 1000;
    const dailyRevenue = hashrate * estimatedBtcPerThDay * btcPrice;
    const dailyPowerCost = powerKw * 24 * electricity;
    const dailyProfit = dailyRevenue - dailyPowerCost;
    const monthlyProfit = dailyProfit * 30;
    const roiDays = dailyProfit > 0 ? machinePrice / dailyProfit : Number.POSITIVE_INFINITY;

    return {
      dailyRevenue,
      dailyPowerCost,
      dailyProfit,
      monthlyProfit,
      roiDays
    };
  }, [values]);

  const updateValue = (key: keyof CalculatorState, value: string) => {
    setValues((current) => ({
      ...current,
      [key]: value
    }));
  };

  const inputLabels =
    locale === "zh"
      ? {
          btcPrice: "BTC 价格",
          hashrate: "算力 TH/s",
          power: "功耗 W",
          electricity: "电价 $/kWh",
          machinePrice: "矿机价格 $"
        }
      : {
          btcPrice: "BTC Price",
          hashrate: "Hashrate TH/s",
          power: "Power W",
          electricity: "Electricity $/kWh",
          machinePrice: "Machine Price $"
        };

  const outputLabels =
    locale === "zh"
      ? {
          dailyProfit: "每日利润",
          monthlyProfit: "月利润",
          powerCost: "每日电费",
          roi: "回本天数"
        }
      : {
          dailyProfit: "Daily Profit",
          monthlyProfit: "Monthly Profit",
          powerCost: "Electricity Cost",
          roi: "ROI Days"
        };

  const fields: Array<[keyof CalculatorState, string, number, string]> = [
    ["btcPrice", inputLabels.btcPrice, 1000, "$"],
    ["hashrate", inputLabels.hashrate, 1, "TH/s"],
    ["power", inputLabels.power, 10, "W"],
    ["electricity", inputLabels.electricity, 0.005, "$/kWh"],
    ["machinePrice", inputLabels.machinePrice, 100, "$"]
  ];

  const roiValue = Number.isFinite(results.roiDays)
    ? `${Math.ceil(results.roiDays)} ${locale === "zh" ? "天" : "days"}`
    : "-";

  const cards = [
    [outputLabels.dailyProfit, `$${results.dailyProfit.toFixed(2)}`, Coins],
    [outputLabels.monthlyProfit, `$${results.monthlyProfit.toFixed(2)}`, Calculator],
    [outputLabels.powerCost, `$${results.dailyPowerCost.toFixed(2)}`, PlugZap],
    [outputLabels.roi, roiValue, Gauge]
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="surface-panel rounded-lg p-5">
        <div className="grid gap-4">
          {fields.map(([key, label, step, suffix]) => (
            <label key={key} className="grid gap-2">
              <span className="text-sm font-medium text-stone-300">{label}</span>
              <span className="flex min-h-12 items-center rounded-lg border border-white/10 bg-black/40 px-3 focus-within:border-gold-500/60">
                <input
                  className="w-full bg-transparent text-base font-semibold text-white outline-none"
                  type="number"
                  min="0"
                  step={step}
                  value={values[key]}
                  onChange={(event) => updateValue(key, event.target.value)}
                />
                <span className="text-xs text-stone-500">{suffix}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(([label, value, Icon]) => (
          <div key={label as string} className="surface-panel rounded-lg p-5">
            <Icon className="size-5 text-gold-500" aria-hidden="true" />
            <p className="mt-4 text-sm text-stone-400">{label as string}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value as string}</p>
          </div>
        ))}
        <div className="rounded-lg border border-gold-500/25 bg-gold-500/10 p-5 text-sm leading-6 text-gold-50 sm:col-span-2">
          {locale === "zh"
            ? "估算公式：每日电费 = power_kw × 24 × electricity_price；月利润 = (daily_revenue - daily_power_cost) × 30；ROI = machine_price ÷ daily_profit。实际收益会随全网难度、矿池费率和 BTC 价格变化。"
            : "Formula: Daily Power Cost = power_kw × 24 × electricity_price; Monthly Profit = (daily_revenue - daily_power_cost) × 30; ROI = machine_price ÷ daily_profit. Actual results vary with network difficulty, pool fees and BTC price."}
        </div>
      </div>
    </div>
  );
}

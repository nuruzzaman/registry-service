import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* Add admin modules imports here */

@NgModule({
  imports: [
    /* Add admin modules here */
    RouterModule.forChild([
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule)
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)
      },
      {
        path: 'health',
        loadChildren: () => import('./health/health.module').then(m => m.HealthModule)
      },
      {
        path: 'logs',
        loadChildren: () => import('./logs/logs.module').then(m => m.LogsModule)
      },
      {
        path: 'metrics',
        loadChildren: () => import('./metrics/metrics.module').then(m => m.MetricsModule)
      },
      /* Add admin routes here */
      {
        path: 'logfile',
        loadChildren: () => import('./logfile/logfile.module').then(m => m.LogfileModule)
      }
    ])
  ]
})
export class AdminRoutingModule {}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TfpcrrEntity } from './tFPCRR.entity';

@Index('PK_TGPCCR', ['codcargo', 'codcarreira'], { unique: true })
@Entity('TGPCCR', { schema: 'SANKHYA' })
export class TgpccrEntity {
  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('int', { primary: true, name: 'CODCARREIRA' })
  codcarreira: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpccrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tgpccrs)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TfpcrrEntity, (tfpcrrEntity) => tfpcrrEntity.tgpccrs)
  @JoinColumn([{ name: 'CODCARREIRA', referencedColumnName: 'codcarreira' }])
  codcarreira2: TfpcrrEntity;
}

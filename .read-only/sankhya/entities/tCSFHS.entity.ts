import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsfapEntity } from './tCSFAP.entity';

@Index('PK_TCSFHS', ['nufap', 'dhalter'], { unique: true })
@Entity('TCSFHS', { schema: 'SANKHYA' })
export class TcsfhsEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('datetime', {
    primary: true,
    name: 'DHALTER',
    default: () => 'getdate()',
  })
  dhalter: Date;

  @Column('varchar', { name: 'STATUS', length: 2 })
  status: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsfhs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcsfhs)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;
}

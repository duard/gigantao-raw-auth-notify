import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfetEntity } from './tCSFET.entity';
import { TmdconEntity } from './tMDCON.entity';

@Index('PK_TCSHTE', ['nufap', 'numetapa', 'envio', 'tipoenvio', 'codcon'], {
  unique: true,
})
@Entity('TCSHTE', { schema: 'SANKHYA' })
export class TcshteEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('smallint', { primary: true, name: 'ENVIO' })
  envio: number;

  @Column('int', { primary: true, name: 'CODCON' })
  codcon: number;

  @Column('char', { primary: true, name: 'TIPOENVIO', length: 1 })
  tipoenvio: string;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcshtes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPA', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;

  @ManyToOne(() => TmdconEntity, (tmdconEntity) => tmdconEntity.tcshtes)
  @JoinColumn([{ name: 'CODCON', referencedColumnName: 'codcon' }])
  codcon2: TmdconEntity;
}

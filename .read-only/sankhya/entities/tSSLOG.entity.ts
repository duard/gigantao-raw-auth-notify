import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsshisEntity } from './tSSHIS.entity';

@Index('PK_TSSLOG', ['codlog'], { unique: true })
@Entity('TSSLOG', { schema: 'SANKHYA' })
export class TsslogEntity {
  @Column('varchar', { name: 'CHAVESS', length: 30 })
  chavess: string;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOMEITE', nullable: true, length: 100 })
  nomeite: string | null;

  @Column('varchar', { name: 'NOMEINSREG', length: 30 })
  nomeinsreg: string;

  @Column('varchar', { name: 'PKREG', length: 60 })
  pkreg: string;

  @Column('int', { primary: true, name: 'CODLOG' })
  codlog: number;

  @Column('varchar', { name: 'PRIVADO', nullable: true, length: 1 })
  privado: string | null;

  @ManyToOne(() => TsshisEntity, (tsshisEntity) => tsshisEntity.tsslogs)
  @JoinColumn([{ name: 'CODHIS', referencedColumnName: 'codhis' }])
  codhis: TsshisEntity;
}

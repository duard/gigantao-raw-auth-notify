import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TgptarEntity } from './tGPTAR.entity';

@Index('PK_TGPFCT', ['codfuncao', 'codtarefa', 'dtinicio'], { unique: true })
@Entity('TGPFCT', { schema: 'SANKHYA' })
export class TgpfctEntity {
  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('int', { primary: true, name: 'CODTAREFA' })
  codtarefa: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpfcts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tgpfcts)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;

  @ManyToOne(() => TgptarEntity, (tgptarEntity) => tgptarEntity.tgpfcts)
  @JoinColumn([{ name: 'CODTAREFA', referencedColumnName: 'codtarefa' }])
  codtarefa2: TgptarEntity;
}

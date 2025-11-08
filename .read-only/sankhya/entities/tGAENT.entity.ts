import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsiendEntity } from './tSIEND.entity';

@Index('PK_TGAENT', ['nrogar', 'nrolocal'], { unique: true })
@Entity('TGAENT', { schema: 'SANKHYA' })
export class TgaentEntity {
  @Column('int', { primary: true, name: 'NROGAR' })
  nrogar: number;

  @Column('int', { primary: true, name: 'NROLOCAL' })
  nrolocal: number;

  @Column('varchar', { name: 'DESCRLOCAL', length: 60 })
  descrlocal: string;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 10 })
  numend: string | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaents)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgaents)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tgaents)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai: TsibaiEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tgaents)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;
}

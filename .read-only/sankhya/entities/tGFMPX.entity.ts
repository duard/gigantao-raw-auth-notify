import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFMPX', ['codmpx'], { unique: true })
@Entity('TGFMPX', { schema: 'SANKHYA' })
export class TgfmpxEntity {
  @Column('int', { primary: true, name: 'CODMPX' })
  codmpx: number;

  @Column('varchar', { name: 'TIPOMOV', length: 1 })
  tipomov: string;

  @Column('varchar', { name: 'SITCOBRANCA', length: 1 })
  sitcobranca: string;

  @Column('datetime', { name: 'DHEVENTO' })
  dhevento: Date;

  @Column('varchar', { name: 'CAMPOALTERADO', nullable: true, length: 40 })
  campoalterado: string | null;

  @Column('varchar', { name: 'INFENVIADA', nullable: true, length: 2000 })
  infenviada: string | null;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'IDTRANSACAO', nullable: true, length: 254 })
  idtransacao: string | null;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfmpxes)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmpxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

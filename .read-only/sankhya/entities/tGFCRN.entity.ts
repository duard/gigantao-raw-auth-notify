import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TGFCRN', ['codcencus', 'codnat'], { unique: true })
@Entity('TGFCRN', { schema: 'SANKHYA' })
export class TgfcrnEntity {
  @Column('int', { primary: true, name: 'CODCENCUS' })
  codcencus: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('char', { name: 'MULTHORAS', nullable: true, length: 1 })
  multhoras: string | null;

  @Column('char', { name: 'MULTHORASSALA', nullable: true, length: 1 })
  multhorassala: string | null;

  @Column('char', { name: 'MULTDIAS', nullable: true, length: 1 })
  multdias: string | null;

  @Column('char', { name: 'MULTPERIODOS', nullable: true, length: 1 })
  multperiodos: string | null;

  @Column('char', { name: 'MULTTURMAS', nullable: true, length: 1 })
  multturmas: string | null;

  @Column('char', { name: 'MULTPARTICIPANTES', nullable: true, length: 1 })
  multparticipantes: string | null;

  @Column('char', { name: 'MULTCONSULTORES', nullable: true, length: 1 })
  multconsultores: string | null;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfcrns)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfcrns)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;
}

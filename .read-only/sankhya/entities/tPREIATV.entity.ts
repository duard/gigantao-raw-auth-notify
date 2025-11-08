import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpriatvEntity } from './tPRIATV.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TPREIATV', ['ideiatv'], { unique: true })
@Entity('TPREIATV', { schema: 'SANKHYA' })
export class TpreiatvEntity {
  @Column('int', { primary: true, name: 'IDEIATV' })
  ideiatv: number;

  @Column('datetime', { name: 'DHINICIO', nullable: true })
  dhinicio: Date | null;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @Column('int', { name: 'CODMTP', nullable: true })
  codmtp: number | null;

  @ManyToOne(() => TpriatvEntity, (tpriatvEntity) => tpriatvEntity.tpreiatvs)
  @JoinColumn([{ name: 'IDIATV', referencedColumnName: 'idiatv' }])
  idiatv: TpriatvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpreiatvs)
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codusu' }])
  codexec: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpreiatvs2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

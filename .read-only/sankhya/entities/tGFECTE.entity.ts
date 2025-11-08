import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFECTE', ['nunota', 'codeve', 'seqeve'], { unique: true })
@Entity('TGFECTE', { schema: 'SANKHYA' })
export class TgfecteEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'CODEVE' })
  codeve: number;

  @Column('int', { primary: true, name: 'SEQEVE' })
  seqeve: number;

  @Column('varchar', { name: 'DESCEVE', nullable: true, length: 60 })
  desceve: string | null;

  @Column('datetime', { name: 'DHRECIBO', nullable: true })
  dhrecibo: Date | null;

  @Column('varchar', { name: 'NRORECIBO', nullable: true, length: 30 })
  nrorecibo: string | null;

  @Column('smallint', { name: 'CODSTATUS', nullable: true })
  codstatus: number | null;

  @Column('varchar', { name: 'DESCRSTATUS', nullable: true, length: 255 })
  descrstatus: string | null;

  @Column('varchar', { name: 'JUSTEVE', nullable: true, length: 255 })
  justeve: string | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('image', { name: 'ARQUIVO', nullable: true })
  arquivo: Buffer | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfectes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

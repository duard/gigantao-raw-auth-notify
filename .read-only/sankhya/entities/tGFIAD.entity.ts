import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfidiEntity } from './tGFIDI.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFIAD', ['nunota', 'sequencia', 'seqdi', 'seqad'], { unique: true })
@Entity('TGFIAD', { schema: 'SANKHYA' })
export class TgfiadEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'SEQDI' })
  seqdi: number;

  @Column('int', { primary: true, name: 'SEQAD' })
  seqad: number;

  @Column('int', { name: 'NROADICAO' })
  nroadicao: number;

  @Column('varchar', { name: 'CODFABRICANTE', length: 60 })
  codfabricante: string;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TgfidiEntity, (tgfidiEntity) => tgfidiEntity.tgfiads, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'SEQDI', referencedColumnName: 'seqdi' },
  ])
  tgfidi: TgfidiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfiads)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

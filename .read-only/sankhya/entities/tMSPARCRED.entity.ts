import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMSPARCRED', ['codparc', 'dtanalise'], { unique: true })
@Entity('TMSPARCRED', { schema: 'SANKHYA' })
export class TmsparcredEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { primary: true, name: 'DTANALISE' })
  dtanalise: Date;

  @Column('float', { name: 'VLRSOLICITADO', nullable: true, precision: 53 })
  vlrsolicitado: number | null;

  @Column('varchar', { name: 'LIBERADO', nullable: true, length: 10 })
  liberado: string | null;

  @Column('datetime', { name: 'DHLIBERACAO', nullable: true })
  dhliberacao: Date | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('float', { name: 'VLRLIBERADO', nullable: true, precision: 53 })
  vlrliberado: number | null;

  @Column('varchar', { name: 'OBSSOLIC', nullable: true, length: 3103 })
  obssolic: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tmsparcreds)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmsparcreds)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmsparcreds2)
  @JoinColumn([{ name: 'CODUSUSOLICIT', referencedColumnName: 'codusu' }])
  codususolicit: TsiusuEntity;
}

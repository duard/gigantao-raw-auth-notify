import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfajaEntity } from './tGFAJA.entity';

@Index('PK_TGFAJN', ['nuaja', 'seqaja'], { unique: true })
@Index('TGFAJN_IFK', ['nunota'], {})
@Entity('TGFAJN', { schema: 'SANKHYA' })
export class TgfajnEntity {
  @Column('int', { primary: true, name: 'NUAJA' })
  nuaja: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('float', { name: 'VLRAJUSTE', precision: 53, default: () => '(0)' })
  vlrajuste: number;

  @Column('char', { name: 'CONVPRODUZIR', length: 1, default: () => "'N'" })
  convproduzir: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { primary: true, name: 'SEQAJA' })
  seqaja: number;

  @Column('char', { name: 'SERIENOTA', nullable: true, length: 5 })
  serienota: string | null;

  @Column('datetime', { name: 'DTAJUSTE', default: () => 'getdate()' })
  dtajuste: Date;

  @Column('int', { name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'NUMDOC', nullable: true })
  numdoc: number | null;

  @Column('datetime', { name: 'DTDOC', nullable: true })
  dtdoc: Date | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfajns)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfajaEntity, (tgfajaEntity) => tgfajaEntity.tgfajns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUAJA', referencedColumnName: 'nuaja' }])
  nuaja2: TgfajaEntity;
}

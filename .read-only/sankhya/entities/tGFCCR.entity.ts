import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgflebEntity } from './tGFLEB.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFCCR', ['nuccr'], { unique: true })
@Index('TGFCCR_I01', ['nrocartao'], { unique: true })
@Entity('TGFCCR', { schema: 'SANKHYA' })
export class TgfccrEntity {
  @Column('int', { primary: true, name: 'NUCCR' })
  nuccr: number;

  @Column('varchar', { name: 'NROCARTAO', length: 19 })
  nrocartao: string;

  @Column('varchar', { name: 'NOMENOCARTAO', length: 22 })
  nomenocartao: string;

  @Column('varchar', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  status: string | null;

  @Column('datetime', { name: 'DTCADASTRO', nullable: true })
  dtcadastro: Date | null;

  @Column('datetime', { name: 'DTVENCIMENTO' })
  dtvencimento: Date;

  @Column('datetime', { name: 'DTEMBOSSAMENTO', nullable: true })
  dtembossamento: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'NUCCRTITULAR', nullable: true })
  nuccrtitular: number | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('varchar', { name: 'NROCARTAOMASC', nullable: true, length: 23 })
  nrocartaomasc: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfccrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgflebEntity, (tgflebEntity) => tgflebEntity.tgfccrs)
  @JoinColumn([{ name: 'NULEB', referencedColumnName: 'nuleb' }])
  nuleb: TgflebEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfccrs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.nuccr)
  tgffins: TgffinEntity[];
}

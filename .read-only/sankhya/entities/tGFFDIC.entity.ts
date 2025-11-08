import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfifdicEntity } from './tGFIFDIC.entity';

@Index('PK_TGFFDIC', ['idlotefdic'], { unique: true })
@Index('TGFFDIC_I01', ['nrocessaofdic'], { unique: true })
@Entity('TGFFDIC', { schema: 'SANKHYA' })
export class TgffdicEntity {
  @Column('int', { primary: true, name: 'IDLOTEFDIC' })
  idlotefdic: number;

  @Column('varchar', { name: 'NROCESSAOFDIC', length: 50 })
  nrocessaofdic: string;

  @Column('float', { name: 'TOTALAQUISICAO', nullable: true, precision: 53 })
  totalaquisicao: number | null;

  @Column('float', { name: 'TOTALQUOTAS', nullable: true, precision: 53 })
  totalquotas: number | null;

  @Column('float', { name: 'TOTALESPECIE', nullable: true, precision: 53 })
  totalespecie: number | null;

  @Column('float', { name: 'TOTALFACE', nullable: true, precision: 53 })
  totalface: number | null;

  @Column('float', { name: 'TAXAEFETIVA', nullable: true, precision: 53 })
  taxaefetiva: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTO' })
  dtfechamento: Date;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgffdics)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgffdics)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @OneToMany(() => TgffinEntity, (tgffinEntity) => tgffinEntity.idlotefdic2)
  tgffins: TgffinEntity[];

  @OneToMany(
    () => TgfifdicEntity,
    (tgfifdicEntity) => tgfifdicEntity.idlotefdic2,
  )
  tgfifdics: TgfifdicEntity[];
}
